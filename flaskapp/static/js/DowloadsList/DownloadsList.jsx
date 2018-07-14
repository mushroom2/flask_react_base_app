import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import styles from '../styles.css'

class DownloadsList extends React.Component{
    render(){
        return (
            <div>
                <table className="table-striped" id="downloadsListTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Size (Mb)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.dlist.length > 0 ?
                        this.props.dlist.map(el => (
                        <tr key={el.id}>
                            <td><a href={`/download/${el.name}`}>{el.name}</a></td>
                            <td>{el.size}</td>
                        </tr>)) : (
                            <tr>
                                <td>No downloads available</td>
                                <td>{null}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount(){
        axios.get('/download')
            .then(resp => this.props.updateDownloadsLists(resp.data))
            .catch(err => console.log(err))
    }
}

const mapStateToProps = function (state) {
    return {dlist: state.DownloadsListReducer.downloadsList}
};

const mapDispatchToProps = function (dispatch) {
        return {updateDownloadsLists(resp){
            dispatch({type: 'FETCH_DOWNLOADS_LIST', payload: resp})
            }}
    };

export { mapDispatchToProps }
export default connect(mapStateToProps, mapDispatchToProps)(DownloadsList)