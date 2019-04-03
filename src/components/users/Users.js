/*eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      userList: [
        {
          username: "王小虎",
          email: "2016-05-02",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      pagenum: 1,
      total: 0,
      searchText: ""
    };
  },
  methods: {
    // 加载用户数据 这里pagenum=1 就是给这个参数添加默认值
    // 当前页  是第一页
    async loadUserList(pagenum = 1, query) {
      let URL = "http://localhost:8888/api/private/v1/users";
      let serObj = {
        headers: {
          Authorization: localStorage.getItem("token")
        },
        params: {
          pagenum,
          query,
          pagesize: 2
        }
      };
      let res = await axios.get(URL, serObj);
      //console.log(res);
      this.userList = res.data.data.users;
      // 总条数
      this.total = res.data.data.total;
      // 当前页
      this.pagenum = res.data.data.pagenum;

      // URL 请求的路径  serObj 请求的参数对象和请求头
      // axios.get(URL, serObj).then(res => {
      //   // console.log(res);
      //   this.userList = res.data.data.users;
      //   // 总条数
      //   this.total = res.data.data.total;
      //   // 当前页
      //   this.pagenum = res.data.data.pagenum;
      // });
    },
    changePage(curpage, query) {
      //这个点击事件是组件element-ui 里面的,改变时 就会触发这个事件
      // 这里没有参数,我们可以试着打印一下,结果 curpag就是当前的页码

      // console.log(curpage);
      this.loadUserList(curpage, this.searchText);
    },
    startQuery() {
      console.log(this.searchText);
      this.loadUserList(1, this.searchText);
    }
  },
  created() {
    this.loadUserList();
  }
};
