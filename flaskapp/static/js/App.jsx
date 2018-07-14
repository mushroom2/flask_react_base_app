import React from "react";
import MyFileInput from "./MyFileInput"
import DownloadsList from "./DowloadsList"

export default class App extends React.Component {
  render () {

      return (
          <div className="mainBlock">
              <div className="container">
                  <div className="col-md-12">
                      <div className="row">
                          <div className="col-md-6 text-center">
                              <MyFileInput />
                          </div>
                          <div className="col-md-6 text-center">
                              <DownloadsList />
                          </div>
                      </div>
                  </div>
              </div>
          </div>);
  }
}