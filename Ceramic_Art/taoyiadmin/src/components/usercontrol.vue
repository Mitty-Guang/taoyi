<template>
    <div>
        <el-header>
            <el-menu class="el-menu-demo" mode="horizontal" background-color="#c6ad8b" text-color="#000"
                active-text-color="#000">
                <el-menu-item style="float:left;">
                    <img src="../assets/images/taoci_black.png" style="height: 80%; " />
                </el-menu-item>
                <div style="position: absolute;left: 50%;top:50%;transform: translate(-50%,-50%);">
                    <el-menu-item index="/news" style="float: left;">
                        <span class="menutitle">陶 瓷 艺 术 管 理 端</span>
                    </el-menu-item>
                </div>
                <el-menu-item style="float:right;">
                    <img src="../assets/logo.png" style="height: 80%; " />
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-main class="usercontrol">
            <el-row class="tac">
                <el-col>
                    <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose"
                        background-color="#c7baa5" text-color="#333" active-text-color="#666">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>用户管理</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title">用户管理</template>
                                <el-menu-item index="1-1" style="width:100%">查看所有用户</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <div index="2" style="height: 590px">
                            <span slot="title"> </span>
                        </div>
                    </el-menu>
                </el-col>
            </el-row>
            <div class="usertable">
                <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                    max-height="500px">
                    <el-table-column fixed prop="name" label="用户名" width="200">
                    </el-table-column>
                    <el-table-column prop="phone" label="电话号码" width="300">
                    </el-table-column>
                    <el-table-column prop="role" label="角色" width="200">
                    </el-table-column>
                    <el-table-column prop="status" label="状态" width="150">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="ChangeStatus(scope.$index)" type="text" size="small">
                                更改冻结状态
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="block" style="float:right">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page.sync="currentPage1" :page-size="pageSize" layout="total, prev, pager, next"
                        :total="tableData.length">
                    </el-pagination>
                </div>
            </div>
        </el-main>
    </div>
</template>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

.usercontrol {
    background-color: #f0eae2 !important;
    color: #333;

}

.usercontrol .tac {

    float: left;
    width: 20%;
    height: 100%;
}

.usercontrol .usertable {
    margin: 2%;
    width: 75%;
    float: left;
}
</style>
<script>
export default {
    data() {
        return {
            currentPage: 1,
            pageSize: 8,
            page: 0,
            tableData: []
        };
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        },
        ChangeStatus(index) {

            var _this = this;
            this.$http
                .get("http://39.101.122.176:88/user/status?id="
                    + _this.tableData[index].id
                )
                .then(res => {
                    _this.getTableData();
                });
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        getTableData() {
            var _this = this;
            this.$http
                .get("http://39.101.122.176:88/user/get/all")
                .then(res => {
                    _this.tableData = res.data.data;
                    _this.page = _this.tableData.length / _this.pageSize;
                    for (var i = 0; i < _this.tableData.length; i++) {
                        _this.tableData[i].status = (_this.tableData[i].status == 0 ? "冻结" : "未冻结")
                        if (_this.tableData[i].role == 1) {
                            _this.tableData[i].role = "超级管理员";
                        }
                        else if (_this.tableData[i].role == 0) {
                            _this.tableData[i].role = "普通用户";
                        }
                        else if (_this.tableData[i].role == 2) {
                            _this.tableData[i].role = "内容管理员";
                        }
                    }

                });
        },

    },
    mounted() {
        this.getTableData();
    }
};
</script>