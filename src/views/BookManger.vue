<template>
    <div>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>Sorry,编辑歌手功能课下完成</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>


        <h1>您好！欢迎进入音乐专辑管理系统</h1>
        <el-form :inline="true" :model="book" class="demo-form-inline">
            <el-form-item label="音乐专辑名称">
                <el-input v-model="book.album_name" placeholder="请输入专辑名称"></el-input>
            </el-form-item>
            <el-form-item label="专辑价格">
                <el-input v-model.number="book.price" type="number" placeholder="请输入专辑价格"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addBook">添加专辑</el-button>
            </el-form-item>
        </el-form>

        <el-table
                :data="books"
                style="width: 80%">
            <el-table-column
                    prop="_id"
                    label="专辑编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="album_name"
                    label="专辑名称"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格">
            </el-table-column>
            <el-table-column
                    prop="singers"
                    label="歌手名称">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="400">
                <template slot-scope="book">
                    <el-button @click="deleteBook(book.row)" type="text" size="small">详细内容</el-button>
                    <el-button @click="deleteBook(book.row)" type="text" size="small">删除</el-button>
                    <el-button @click="dialogVisible=true" type="text" size="small">编辑</el-button>
                    <el-button @click="deleteBook(book.row)" type="text" size="small">追加歌手</el-button>
                </template>
            </el-table-column>

        </el-table>


    </div>
</template>

<script>

    export default {
        name: "BookManger",
        created() {
            fetch(this.url, {type: "GET"})
                .then(res => res.json())
                .then(bks =>{ 
                    this.books = bks;
                    this.singers = bks.singers;
                })
        },
        data() {
            return {
                url: "http://39.99.185.180:3000/albums",
                //url:"albums",
                maxId: 2,
                book: {name: '', price: ''},
                dialogVisible: false,
                books: [],
                singers:[],
            }
        },
        methods: {
            deleteBook(book) {
                fetch(this.url+"/"+book._id,{method:"DELETE"})
                    .then(res=>res.json())
                    .then(()=>{
                        let index = this.books.findIndex(item => item._id == book._id)
                        this.books.splice(index, 1)
                    })
            },
            addBook() {
                fetch(this.url, {
                    method: "POST", headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.book)
                }).then(res=>res.json())
                    .then(nb=>this.books.push(nb))
                    alert("添加专辑成功！")
            }
        },
    }
</script>

<style scoped>

</style>
