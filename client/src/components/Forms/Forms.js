import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyle from './style'
import FileBase from 'react-file-base64';

const Forms = () => {
  const classes = useStyle();


  const [postData, setpostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  }
  )
  const handleSubmit = () => {

  }

  const clear = () => {

  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating a memory</Typography>
        <TextField
          name='creator'
          variant='outlined'
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setpostData({ ...postData, creator: e.target.value })}
        />
        <TextField
          name='title'
          variant='outlined'
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setpostData({ ...postData, title: e.target.value })}
        />  
        <TextField
          name='message'
          variant='outlined'
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => setpostData({ ...postData, message: e.target.value })}
        />
        <TextField
          name='tags'
          variant='outlined'
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setpostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
          
            onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button className={classes.buttonSubmit} variant='contained' color="primary" size="large" type="submit" fullWidth>
          Submit
        </Button>
        <Button variant='contained' color="secondary" size="small" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Forms
