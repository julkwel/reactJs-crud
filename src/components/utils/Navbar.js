import React,{Component} from 'react'
import 'bootstrap'

export default class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-inverse navbar-static-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Teste DG4YOU</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="">Teste Julien</a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="active"><a href="/">Employe <span className="sr-only">(current)</span></a></li>
                  <li><a href="/">Experience</a></li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}