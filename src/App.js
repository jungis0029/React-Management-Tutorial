import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/200/200/1',
  'name': '정인선',
  'birthday': '930601',
  'gender': '여자',
  'job': '트레이더'
},
{
  'id': 2,
  'image': 'https://placeimg.com/200/200/2',
  'name': '홍길동',
  'birthday': '620406',
  'gender': '남자',
  'job': 'CEO'
},
{
  'id': 3,
  'image': 'https://placeimg.com/200/200/3',
  'name': '홍길순',
  'birthday': '880601',
  'gender': '여자',
  'job': '프로그래머'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
              key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
          );
        })
      }

      <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />

    </div>
  );
}


export default App;
