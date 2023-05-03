import React, { Component } from "react";

export default class Record extends Component {
    render () {

    const { count, element } = this.props;
    
    const value = Object.values(element);

    const record = value.map((item) => {
        return (
            <td key={item}>
                {item}
            </td>
        )
    });
    

    return (
        <React.Fragment >
            <th scope="row">
                <div className="insert">
                    {count}
                </div>
            </th>
            {record}
        </React.Fragment>);
    }
};