/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Debits = (props) => {
  // Create the list of Debit items
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount.toFixed(2)} {debit.description} {date}</li>
    });
  }
  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>

      {debitsView()}

      <form onSubmit={props.addDebit}>
        <input type="text" name="description" />
        <input type="number" name="amount" step="any"/>
        <button type="submit">Add Debit</button>
      </form>
      <br/>
      <Link to="/">Return to Home</Link>
      <br/>
      <Link to="/userProfile">User Profile</Link>
      <br/>
      <Link to="/login">Login</Link>
      <br/>
      <Link to="/credits">Credits</Link>
      <br/>
      <Link to="/debits">Debits</Link>
      <AccountBalance accountBalance={props.accountBalance}/>
    </div>
  );
}

export default Debits;