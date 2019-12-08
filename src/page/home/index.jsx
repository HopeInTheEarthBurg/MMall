import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import './index.css'

class Home extends React.Component {
    render() {
        return (
            <div id="page-wrapper">
                <div id="page-inner">
                    <PageTitle title="首页">
                        <button className="btn btn-error">test</button>
                    </PageTitle>
                    <div className="row"></div>
                    <div className="col-md-12">body</div>
                </div>
            </div>
        )
    }
}

export default Home;