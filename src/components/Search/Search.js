import React from 'react';
import './Search.css';
const search = (props) =>
{   
    return(
        <div style={{ marginTop: "1.625em", marginBottom: "1.625em" }}>
        <p className="Form-header">Search any topic, blogs, news and discussions here....</p>
        <form>
          <input
            placeholder="Enter news by topic, name...." />
          <input type="date" min="1970-01-01" name="datetime" 
             placeholder="Published Till Date" />
          {<button>Search</button>}
          {<button disabled>Searching...</button>}
        </form>
      </div>
    );
}
export default search;