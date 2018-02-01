import React, { Component } from 'react';
import './../asstes/index.css'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    function ListItem(props) {
      return <li>{props.value}</li>;
    }

    function NumberList(props) {
      let numbers = props.numbers;
      // key可要可不要，同vue
      // 建议带上，懒的话可以 let listItems = numbers.map((item, index) => <li key={index}>{item}</li>);
      // react官方建议如果数组需要实现重新排序，加key作为索引会比较慢
      // key不会显示出来，data-key会显示出来
      let listItems = numbers.map(item => <ListItem key={item.id} data-key={item.id} value={item.val} />);

      return (
        <ul>{listItems}</ul>
      );
    };

    let numbers = [
      { id: 1, val: 1 },
      { id: 2, val: 2 },
      { id: 3, val: 3 },
      { id: 4, val: 4 },
      { id: 5, val: 5 }
    ]

    return (
      <div className="listContent">
        <NumberList numbers={numbers} />
      </div> 
    );
  }
}

export default List;