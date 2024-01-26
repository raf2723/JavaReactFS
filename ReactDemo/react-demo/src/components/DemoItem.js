function DemoItem(props){

    return(
        <tr  onClick={()=>props.deleteItem(props.rowNumber)}>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    );

}

export default DemoItem