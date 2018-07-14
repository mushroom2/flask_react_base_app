import React from 'react'
import {connect} from 'react-redux'
import styles from '../styles.css'

class DownloadsList extends React.Component{
    render(){
        return (
            <div>
                <table className="table-striped" id="downloadsListTable">
                    <tbody>
                    {this.props.dlist.map(el => (<tr>{el}</tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {dlist: state.DownloadsListReducer.downloadsList}
};

const mapDispatchToPropds = function (dispatch) {
        return {updateDownloadsLists(resp){
            dispatch({type: 'FETCH_DOWNLOADS_LIST', payload: resp})
            }}
    };

export default connect(mapStateToProps, mapDispatchToPropds)(DownloadsList)