import React from 'react'
import axios from 'axios'

class MyFileInput extends React.Component{

    constructor(props){
        super(props);
        this.state = {files: []};
        this.handleFiles = this.handleFiles.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
    }



    handleFiles(files) {
      this.state.files = files
    }

    uploadFiles(e){
        if (this.state.files.length === 0){
            alert('no files to upload!');
        } else {
            let formdata = new FormData();
            formdata.append(
                'file', this.state.files[0]
            );
            axios.post('/upload', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }}).then(function (res) {
                console.log(res)
                })
                .catch(function (err) {
                console.log(err)
                });
        }

        }


    render(){
        return (
            <div className="container">
                <div className="col-md-12 text-center">

                        <p> Upload Your file
                            <input type="file" className="form-control" onChange={(e) => this.handleFiles(e.target.files)}/>
                        </p>
                    <p>
                        <button className="btn btn-default" onClick={this.uploadFiles}>upload!</button>
                    </p>
                </div>
            </div>
                )
    }
}

export default MyFileInput