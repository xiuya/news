/**
 * Created by wengs_000 on 2015/4/14 0014.
 */

if(typeof (layOutData)=='undefined'){
    layOutData=[];
}
layOutData.push(
    {
        name: 'css',
        containerId:'cssLayOuts',
        titleInfo:'CSS样式',
        helpInfo:'<a target="_blank" href="http://getbootstrap.com/css">基础CSS.</a>',
        layOuts:[
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <span class="btn-group btn-group-xs">	<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">对齐<span class="caret"></span></a>	<ul class="dropdown-menu">				<li class=""><a href="#" rel="">Default</a></li>				<li class="active"><a href="#" rel="text-left">Left</a></li>				<li class=""><a href="#" rel="text-center">Center</a></li>				<li class=""><a href="#" rel="text-right">Right</a></li>			</ul></span>		<span class="btn-group btn-group-xs">	<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">样式<span class="caret"></span></a>	<ul class="dropdown-menu">				<li class="active"><a href="#" rel="">Default</a></li>				<li class=""><a href="#" rel="text-muted">Muted</a></li>				<li class=""><a href="#" rel="text-primary">Primary</a></li>				<li class=""><a href="#" rel="text-success">Success</a></li>				<li class=""><a href="#" rel="text-info">Info</a></li>				<li class=""><a href="#" rel="text-warning">Warning</a></li>				<li class=""><a href="#" rel="text-danger">Danger</a></li>			</ul></span>	</span>',
                preview:'标题',
                view:'<h3 contenteditable="true">这是一段h3样式的标题.</h3>'
            },
            {
                buttons: '<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview: "TAB页",
                view: '<ul class="nav nav-tabs"><li role="presentation" class="active"><a href="#">主页</a></li><li role="presentation"><a href="#">简介</a></li><li role="presentation"><a href="#">消息</a></li></ul>'
            },
            {
                buttons: '<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <a class="btn btn-xs btn-default" href="#" rel="list-unstyled">无样式</a><a class="btn btn-xs btn-default" href="#" rel="list-inline">嵌入</a></span>',
                preview: "无序列表",
                view: '<ul contenteditable="true"><li>固话</li><li>手机</li><li>网络</li></ul>'
            },
            {
                buttons: '<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <a class="btn btn-xs btn-default" href="#" rel="list-unstyled">无样式</a><a class="btn btn-xs btn-default" href="#" rel="list-inline">嵌入</a></span>',
                preview: "有序列表",
                view: '<ol contenteditable="true"><li>固话</li><li>手机</li><li>网络</li></ol>'
            },
            {
                buttons: '<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <span class="btn-group btn-group-xs"><a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">样式<span class="caret"></span></a><ul class="dropdown-menu"><li class="active"><a href="#" rel="">默认</a></li><li class=""><a href="#" rel="table-striped">条纹</a></li><li class=""><a href="#" rel="table-bordered">边框</a></li></ul></span><a class="btn btn-xs btn-default" href="#" rel="table-hover">鼠标指示</a><a class="btn btn-xs btn-default" href="#" rel="table-condensed">紧凑</a></span>',
                preview: "表格",
                view: '<table class="table" contenteditable="true"><thead><tr><th>#</th><th>产品</th><th>日期</th><th>状态</th></tr></thead><tbody><tr><td>1</td><td>手机</td><td>01/04/2012</td><td>默认</td></tr><tr class="active"><td>1</td><td>固定电话</td><td>01/04/2012</td><td>在用</td></tr><tr class="success"><td>2</td><td>宽带</td><td>02/04/2012</td><td>禁用</td></tr><tr class="warning"><td>3</td><td>卫星</td><td>03/04/2012</td><td>待用</td></tr><tr class="danger"><td>4</td><td>发报机</td><td>04/04/2012</td><td>未启用</td></tr></tbody></table>'
            },
            {
                buttons: '<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview: "搜索框",
                view: '<form class="navbar-form navbar-left" role="search"><div class="form-group"><input type="text" class="form-control" placeholder="搜索"></div> <button type="submit" class="btn btn-default">提交</button></form>'
            },
            {
                buttons: '<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview: "表单",
                view: '<form role="form"><div class="form-group"><label for="exampleInputEmail1">Email</label><input type="email" class="form-control" id="exampleInputEmail1" placeholder="请输入 email"></div><div class="form-group"><label for="exampleInputPassword1">密码</label><input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入密码"></div><div class="form-group"><label for="exampleInputFile">文件</label><input type="file" id="exampleInputFile"><p class="help-block">提示信息.</p></div><div class="checkbox"><label><input type="checkbox">同意条款</label></div><button type="submit" class="btn btn-default">提交</button></form>'
            },
            {
                buttons: '<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview: "纵向表单",
                view: '<form class="form-horizontal" role="form"><div class="form-group"><label for="inputEmail3" class="col-sm-2 control-label">Email</label><div class="col-sm-10"><input type="email" class="form-control" id="inputEmail3" placeholder="请输入Email"></div></div><div class="form-group"><label for="inputPassword3" class="col-sm-2 control-label">密码</label><div class="col-sm-10"><input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码"></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="checkbox"><label><input type="checkbox">记住表单信息</label></div></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button type="submit" class="btn btn-default">登录</button></div></div></form>'
            },
            {
                buttons: '<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button>		<span class="btn-group btn-group-xs">	<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">样式<span class="caret"></span></a>	<ul class="dropdown-menu">				<li class=""><a href="#" rel="btn-default">Default</a></li>				<li class=""><a href="#" rel="btn-primary">Primary</a></li>				<li class=""><a href="#" rel="btn-success">Success</a></li>				<li class=""><a href="#" rel="btn-info">Info</a></li>				<li class=""><a href="#" rel="btn-warning">Warning</a></li>				<li class=""><a href="#" rel="btn-danger">Danger</a></li>				<li class=""><a href="#" rel="btn-link">Link</a></li>			</ul></span>		<span class="btn-group btn-group-xs">	<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">尺寸<span class="caret"></span></a>	<ul class="dropdown-menu">				<li class=""><a href="#" rel="btn-lg">Large</a></li>				<li class=""><a href="#" rel="btn-default">Default</a></li>				<li class=""><a href="#" rel="btn-sm">Small</a></li>				<li class=""><a href="#" rel="btn-xs">Mini</a></li>			</ul></span>						  		<a class="btn btn-xs btn-default" href="#" rel="btn-block">通栏</a>		<a class="btn btn-xs btn-default" href="#" rel="active">禁用</a></span>',
                preview: "按钮",
                view: '<button type="button" class="btn btn-default" contenteditable="true">按钮</button>'
            },
            {
                buttons: '<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button>		<span class="btn-group btn-group-xs">	<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">样式<span class="caret"></span></a>	<ul class="dropdown-menu">				<li class="active"><a href="#" rel="">默认</a></li>				<li class=""><a href="#" rel="img-rounded">圆角</a></li>				<li class=""><a href="#" rel="img-circle">圆圈</a></li>				<li class=""><a href="#" rel="img-thumbnail">相框</a></li>			</ul></span>	</span>',
                preview: "图片",
                view: '<img alt="66x66" src="img/asiainfo.jpg" class="img-circle">'
            },

            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'文本框',
                view:'<input type="text" class="form-control" placeholder="文本框中的提示内容">'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'密码框',
                view:'<input type="password" class="form-control" placeholder="文本框中的提示内容">'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'固定内容文本框',
                view:'<div class="input-group"><span class="input-group-addon">www.</span><input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"><span class="input-group-addon">.com</span></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带按钮文本框',
                view:'<div class="col-lg-6"><div class="input-group"><input type="text" class="form-control" placeholder="要查找的内容..."><span class="input-group-btn"><button class="btn btn-default" type="button">查找</button></span></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带下拉文本框',
                view:'<div class="col-lg-6"><div class="input-group"><input type="text" class="form-control" aria-label="..."><div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Action<span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-right" role="menu"><li><a href="#">动作1</a></li><li><a href="#">动作2</a></li><li><a href="#">其他动作</a></li><li class="divider"></li><li><a href="#">链接</a></li></ul></div></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'文本',
                view:'<p class="navbar-text">这是一条文本信息</p>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'文本域',
                view:'<textarea class="form-control" rows="3" placeholder="请输入文本信息"></textarea>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'被禁用的文本框',
                view:'<input class="form-control" id="disabledInput" type="text" placeholder="文本框被禁用了" disabled>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'单选按钮',
                view:'<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 1</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 2</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> 3</label>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'多选按钮',
                view:'<label class="checkbox-inline"><input type="checkbox" id="inlineCheckbox1" value="option1"> 1</label><label class="checkbox-inline"><input type="checkbox" id="inlineCheckbox2" value="option2"> 2</label><label class="checkbox-inline"><input type="checkbox" id="inlineCheckbox3" value="option3"> 3</label>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'下拉列表',
                view:'<select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>'
            }
        ]
    }
);