import logo from './logo.svg';
import './App.css';

function App() {
  const arr = [1, 2, 3, 4, 5];
  
  
  const obj = {name: 'john', surname: 'smit'};
  
  
  let age = 18;
  let isAdult = true;
  if(age < 18){
    isAdult = false;
  };
  let text;
  if(isAdult){
    text =  'Привет'
  }else{
    text = 'Чао, персик, дозревай'
  };


  const isAdmin = true;
  let adminText;
  if(isAdmin){
    adminText = <div><p>Ого, ты админ????</p><p>Я тож хочу</p></div>
  };


  function render1 (){
    return (
    <div>
      текст
    </div>
    );
  };

  function render2(){
    text = <div>текст</div>;
    return text;
  };


  function render3(){
    text = <div>&lt;p&gt;текст&lt;/p&gt;</div>;
    return text;
  };


  let text1;
  let text2;
  let text3;
  function render4(){
    text1 = <div>&lt;p&gt;текст1&lt;/p&gt;</div>;
    text2 = <div>&lt;p&gt;текст2&lt;/p&gt;</div>;
    text3 = <div>&lt;p&gt;!!!&lt;/p&gt;</div>;
    return [text1, text3, text2]
  };


  function render5(){
    let attr = 'block'
    return <div id={attr}>текст</div>
  };


  function render6(){
    let str = 'block'
    return <div className={str}>текст</div>
  };


  function render7(){
    let divStyle = {color: 'green', border: '1px solid red', borderRadius: '30px'}
    return <div style={divStyle}>текст</div>;
  };


  function render8(){
    const show = true;
    let text;
    if(show){
      text = 'текст1'
    }else{
      text = 'текст2'
    };
    return text
  };


  function render9(){
    let arr = ['a', 'b', 'c', 'd', 'e'];
    return <ul><li>{arr[0]}</li><li>{arr[1]}</li><li>{arr[2]}</li><li>{arr[3]}</li><li>{arr[4]}</li></ul>
  };


  function getText(){
    let text = <div>&lt;p&gt;текст1&lt;/p&gt;</div>;
    return text
  };

  function getNum1(){
    return 1
  };

  function getNum2(){
    return 2
  };

  function render11(){
    return getNum1() + getNum2();
  };

  let workers = [{name: 'Emir', surname: 'Sagidullin', days: 10, salary: 1000}, {name: 'Javapon', surname: 'Javaponov', days: 700, salary: 100000}]

  
  return (
    <div className="App">
      <div> Emir mega super</div>
      <p> Emir super puper</p>
      <p> Emir super vuper</p>


      <br />


      <div>
        <input /><br />
        <input /><br />
        <input /><br />
      </div>


      <br />


      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
      </div>


      <br />


      <div>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </div>


      <br />


      <div>
        <p className='one'>one</p>
        <p className='two'>two</p>
        <p className='three'>three</p>
      </div>


      <br />


      <div>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
      </div>


      <br />


      <div>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
      </div>


      <br />


      <div>
        <input />
      </div>


      <br />


      <div>
        <input />
        <input />
        <input />
      </div>


      <br />


      <div>
        <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
        <li>{arr[3]}</li>
        <li>{arr[4]}</li>
      </div>


      <br />


      <div>
        <p>
          name: <span>{obj.name}</span> <br />
          surname: <span>{obj.surname}</span>
        </p>
      </div>


      <br />

      
      <div>
        <p>{text}</p>
      </div>


      <br />


      <div>
        {adminText}
      </div>


      <br />


      <div>
        {render1()}
      </div>


      <br />


      <div>
        {render2()}
      </div>
      

      <br />


      <div>
        {render3()}
      </div>
      

      <br />


      <div>
        {render4()}
      </div>
      

      <br />


      <div>
        {render5()}
      </div>
      

      <br />


      <div>
        {render6()}
      </div>
      

      <br />


      <div>
        {render7()}
      </div>
      

      <br />


      <div>
        {render8()}
      </div>
      

      <br />


      <div>
        {render9()}
      </div>
      

      <br />


      <div>
        {getText()}
      </div>
      

      <br />


      <div>
        {render11()}
      </div>
      

      <br />


      <div>
        <table>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Дни</th>
            <th>Ставка</th>
            <th>Зарплата</th>
          </tr>
          <tr>
            <td>{workers[0].name}</td>
            <td>{workers[0].surname}</td>
            <td>{workers[0].days}</td>
            <td>{workers[0].salary}</td>
            <td>{workers[0].days * workers[0].salary}</td>
          </tr>
          <tr>
            <td>{workers[1].name}</td>
            <td>{workers[1].surname}</td>
            <td>{workers[1].days}</td>
            <td>{workers[1].salary}</td>
            <td>{workers[1].days * workers[0].salary}</td>
          </tr>
        </table>
      </div>

    </div>
  );
}

export default App;
