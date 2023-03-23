import React from 'react';
import './Filter.css'
const SchoolShow = ({d,i}) => {
    return (
        <div>
            <h2></h2>
            <table id="customers">
  <tr>
    <th>No</th>
    <th>School</th>
    <th>Country</th>
  </tr>
  <tr>
    <td >{i}</td>
    <td>{d.school}</td>
    <td></td>
    <td></td>
  </tr>
</table>

{/* <div className='grid grid-cols-3'>
<tr>
<td>{i}</td>

</tr>
<tr>
<td>{d.school}</td>
</tr>
<tr>
<td>{d.students}</td>
</tr>
</div> */}
        </div>
    );
};

export default SchoolShow;