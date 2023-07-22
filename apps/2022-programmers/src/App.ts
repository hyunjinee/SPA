import Dropdown from './components/Dropdown';
import Pagination from './components/Pagination';
import Table from './components/Table';

export const getData = async () => {
  return new Promise((resolve, reject) => {
    resolve(tempData);
  });
};

export default class App {
  constructor(private $app: HTMLDivElement) {
    this.render();
  }

  async render() {
    const data = await getData();
    new Table(data);
    new Dropdown(data as object);
    new Pagination(data as object);
  }
  // async render() {
  //   try {
  //     const response = await fetch('/web/src/data.json');
  //     console.log(response);
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //       new Table(data);
  //     } else {
  //     }
  //   } catch (error) {}
  // }
}

export const tempData = [
  {
    name: 'name1',
    title: 'Designer',
    email: 'jade@grepp.co',
    role: 'Owner',
  },
  {
    name: 'name2',
    title: 'Front-End Developer',
    email: 'sabastian@grepp.co',
    role: 'Admin',
  },
  {
    name: 'name3',
    title: 'Director',
    email: 'antony@grepp.co',
    role: 'Owner',
  },
  {
    name: 'name4',
    title: 'Full-Stack Developer',
    email: 'gilbert@grepp.co',
    role: 'Member',
  },
  {
    name: 'name5',
    title: 'Full-Stack Developer',
    email: 'lucy@grepp.co',
    role: 'Admin',
  },
  {
    name: 'name6',
    title: 'Front-End Developer',
    email: 'luke@grepp.co',
    role: 'Owner',
  },
  {
    name: 'name7',
    title: 'Full-Stack Developer',
    email: 'alice@grepp.co',
    role: 'Admin',
  },
  {
    name: 'name8',
    title: 'Designer',
    email: 'henry@grepp.co',
    role: 'Member',
  },
  {
    name: 'name9',
    title: 'Director',
    email: 'dorothy@grepp.co',
    role: 'Owner',
  },
  {
    name: 'name10',
    title: 'Back-End Developer',
    email: 'alexander@grepp.co',
    role: 'Admin',
  },
  {
    name: 'name11',
    title: 'Back-End Developer',
    email: 'aaron@grepp.co',
    role: 'Owner',
  },
  {
    name: 'name12',
    title: 'Designer',
    email: 'peter@grepp.co',
    role: 'Owner',
  },
  {
    name: 'name13',
    title: 'Director',
    email: 'emma@grepp.co',
    role: 'Admin',
  },
  {
    name: 'name14',
    title: 'Senior Designer',
    email: 'courtney@grepp.co',
    role: 'Member',
  },
  {
    name: 'name15',
    title: 'Director',
    email: 'david@grepp.co',
    role: 'Owner',
  },
  {
    name: 'name16',
    title: 'Front-End Developer',
    email: 'emily@grepp.co',
    role: 'Owner',
  },
  {
    name: 'name17',
    title: 'Full-Stack Developer',
    email: 'charlotte@grepp.co',
    role: 'Admin',
  },
  {
    name: 'name18',
    title: 'Director',
    email: 'andrea@grepp.co',
    role: 'Admin',
  },
  {
    name: 'name19',
    title: 'Full-Stack Developer',
    email: 'jacob@grepp.co',
    role: 'Owner',
  },
  {
    name: 'name20',
    title: 'Full-Stack Developer',
    email: 'carloll@grepp.co',
    role: 'Member',
  },
  {
    name: 'name21',
    title: 'Director',
    email: 'anna@grepp.co',
    role: 'Member',
  },
  {
    name: 'name22',
    title: 'Back-End Developer',
    email: 'kelly@grepp.co',
    role: 'Admin',
  },
  {
    name: 'name23',
    title: 'Director',
    email: 'janafer@grepp.co',
    role: 'Owner',
  },
  {
    name: 'name24',
    title: 'Full-Stack Developer',
    email: 'hugh@grepp.co',
    role: 'Admin',
  },
  {
    name: 'name25',
    title: 'Director',
    email: 'solomon@grepp.co',
    role: 'Admin',
  },
];
