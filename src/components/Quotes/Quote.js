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
            <br/>
                    <div className="row">
                        <div className="col-md-2">
                            <b> <i>{this.props.quote.author}</i></b>
                        </div>
                        <div className="col-md-6">
                            <b>{this.props.quote.content}</b>
                        </div>
                    </div>
                </div>
            </li>
        )
    }

}