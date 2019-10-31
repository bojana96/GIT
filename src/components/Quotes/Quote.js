import React from 'react';
export default class Quote extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            //students:listStudents()
            //clicked:false,
            clicked:false,
            //indeksi:''
        }
    }




    render() {
        return (
            <li  className="list-group-item">
                <div >

                    <div className="row">
                        <div className="col-md-3">
                            <b> {this.props.quote.author}</b>
                        </div>
                        <div className="col-md-3">
                            <b>{this.props.quote.content}</b>
                        </div>
                    </div>
                </div>
            </li>
        )
    }

}