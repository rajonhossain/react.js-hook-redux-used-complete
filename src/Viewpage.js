
import { useSelector, useDispatch } from 'react-redux';
 

function Viewpage(props) {
    const count = useSelector(state => state.counter);    


  return (
    <>
{
  count.map((datax) => {
    return (      
        <tr>
          <td>{datax.id}</td>
          <td>{datax.title}</td>
        </tr>
      
      )
  })
}
    </>
  );
}

export default Viewpage;
