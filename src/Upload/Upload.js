import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import immer from 'immer'
import { getUidStr } from '../utils/uid'
import { uploadClass } from '../styles'
import ajax, { ERROR, UPLOADING } from './ajax'
import FileInput from './FileInput'
import File from './File'
import Result from './Result'

class Upload extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      files: {},
      recycle: [],
    }

    this.addFile = this.addFile.bind(this)
    this.bindElement = this.bindElement.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.removeFile = this.removeFile.bind(this)
    this.removeValue = this.removeValue.bind(this)
    this.resumeValue = this.resumeValue.bind(this)
  }

  getAction(file) {
    const { action } = this.props
    if (typeof action === 'string') return action
    if (typeof action === 'function') return action(file)
    return ''
  }

  bindElement(input) {
    this.input = input
  }

  handleAddClick() {
    this.input.click()
  }

  removeFile(id) {
    const file = this.state.files[id]
    if (file) {
      file.xhr.abort()
      this.setState(immer((draft) => {
        delete draft.files[id]
      }))
    }
  }

  removeValue(index) {
    this.setState(immer((draft) => {
      draft.recycle.push(this.props.value[index])
    }))
    const value = immer(this.props.value, (draft) => {
      draft.splice(index, 1)
    })
    this.props.onChange(value)
  }

  resumeValue(index, value) {
    this.props.onChange(immer(this.props.value, (draft) => {
      draft.push(value)
    }))
    this.setState(immer((draft) => {
      draft.recycle.splice(index, 1)
    }))
  }

  addFile(e) {
    const input = e.target
    const { beforeUpload, validator } = this.props
    const files = { ...this.state.files }

    Array.from({ length: input.files.length }).forEach((_, i) => {
      const blob = input.files[i]
      const id = getUidStr()
      const file = {
        name: blob.name,
        process: 0,
        status: UPLOADING,
      }

      files[id] = file

      if (typeof validator.size === 'function') {
        const res = validator.size(blob.size)
        if (res instanceof Error) {
          file.message = res.message
          file.name = res.message
          file.status = ERROR
          return
        }
      }

      if (beforeUpload) {
        beforeUpload(blob, (args) => {
          if (args.status !== ERROR) files[id].xhr = this.uploadFile(id, blob)
          this.setState(immer((draft) => {
            draft.files[id] = Object.assign({}, draft.files[id], args)
          }))
        })
      } else {
        files[id].xhr = this.uploadFile(id, blob)
      }
    })

    this.setState({ files })
  }

  uploadFile(id, file) {
    const {
      onUpload, name, htmlName, cors, params, withCredentials,
    } = this.props
    return ajax({
      url: this.getAction(file),
      name: htmlName || name,
      cors,
      params,
      withCredentials,
      file,

      onProgress: (e) => {
        const percentage = (e.loaded / e.total) * 100

        this.setState(immer((draft) => {
          draft.files[id].process = percentage
        }))
      },

      onLoad: (e) => {
        console.log(e)
        const xhr = e.currentTarget
        if (!/^2|1223/.test(xhr.status)) {
          this.handleError(id, xhr)
          return
        }

        let value = xhr.responseText
        if (onUpload) {
          value = onUpload(value, file)
        }

        if (value instanceof Error) {
          this.setState(immer((draft) => {
            draft.files[id].status = ERROR
            draft.files[id].name = value.message
            draft.files[id].message = value.message
          }))
        } else {
          this.setState(immer((draft) => {
            delete draft.files[id]
          }))
          // add value
          const values = immer(this.props.value, (draft) => {
            draft.push(value)
          })
          this.props.onChange(values)
        }
      },

      onError: xhr => this.handleError(id, xhr),
    })
  }

  handleError(id, xhr) {
    const { onError } = this.props

    let message = xhr.statusText
    if (onError) message = onError(xhr)

    this.setState(immer((draft) => {
      draft.files[id].status = ERROR
      draft.files[id].message = message
    }))
  }

  render() {
    const {
      children, limit, value, renderResult, accept, style,
    } = this.props
    const { files, recycle } = this.state
    const className = classnames(uploadClass('_'), this.props.className)

    return (
      <div className={className} style={style}>
        {
          (limit === 0 || limit > value.length) &&
          <span className={uploadClass('handle')} onClick={this.handleAddClick}>
            {children}
            <FileInput accept={accept} ref={this.bindElement} onChange={this.addFile} />
          </span>
        }

        {
          value.map((v, i) => (
            <Result
              key={i}
              value={v}
              index={i}
              renderResult={renderResult}
              onRemove={this.removeValue}
            />
          ))
        }

        {
          Object.keys(files).map(id => (
            <File {...files[id]} key={id} id={id} onRemove={this.removeFile} />
          ))
        }

        {
          recycle.map((v, i) => (
            <Result
              key={i}
              value={v}
              index={i}
              renderResult={renderResult}
              resumeAble={limit > value.length}
              onResume={this.resumeValue}
            />
          ))
        }
      </div>
    )
  }
}

Upload.propTypes = {
  accept: PropTypes.string,
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  beforeUpload: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
  cors: PropTypes.bool,
  image: PropTypes.bool,
  htmlName: PropTypes.string,
  limit: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onError: PropTypes.func,
  onUpload: PropTypes.func,
  params: PropTypes.object,
  renderResult: PropTypes.func,
  validator: PropTypes.object,
  value: PropTypes.array,
  style: PropTypes.object,
  withCredentials: PropTypes.bool,
}

Upload.defaultProps = {
  cors: false,
  limit: 0,
  validator: {},
  value: [],
  withCredentials: false,
}

export default Upload