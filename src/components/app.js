import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <section className="hero">
            <div className="hero-head">
                <div className="container">
                    <nav className="nav">
                        <div className="nav-left">
                            <Link to="/" className="nav-item is-brand" >
                                <h1 className="title">Winterfell Test</h1>
                            </Link>
                        </div>

                        <div className="nav-right nav-menu">
                            <span className="nav-item">
                                <div className="level-right">
                                    <Link to="/create" className="button is-primary">
                                        Adicionar Store
                                    </Link>
                                    <Link to="/store-types/create" className="button is-primary">
                                        Adicionar Store-Type
                                    </Link>
                                </div>
                            </span>
                        </div>
                    </nav>
                </div>
            </div>
        </section>

        {this.props.children}
      </div>
    );
  }
}

export default App;
