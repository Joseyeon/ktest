
var include = {
	meta : function(){
		document.write('<title>웹퍼블리싱가이드</title>');
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />');
	},
	head : function(){
		document.write('<!-- Guide Common -->');
		document.write('<link href="../../css/common.css" rel="stylesheet">');
		document.write('<link href="../css/guide.css" rel="stylesheet">');
		document.write('<link href="../../css/style.css" rel="stylesheet">');
		document.write('<script src="../js/jquery-3.6.1.min.js"></script>');

		document.write('<!-- Guide Conventions-->');
		document.write('<link href="../css/shCoreDefaultWhite.css" rel="stylesheet" />');
		document.write('<script src="../js/guide_common.js"></script>');
		document.write('<script src="../../js/plugin/aos.js"></script>');
		document.write('<script src="../../js/common.js"></script>');
		document.write('<script src="../js/shCore.js?cb=undefined"></script>');
		document.write('<script src="../js/shAutoLoader.js?cb=undefined"></script>');
		document.write('<script src="../js/shBrushjScript.js?cb=undefined"></script>');
		document.write('<script src="../js/shBrushXml.js?cb=undefined"></script>');
		document.write('<script src="../js/shBrushCss.js?cb=undefined"></script>');
		document.write('<script>SyntaxHighlighter.all();</script>');
	},
	header : function(){
		document.write('	<header class="g-header g-in-sec">');
		document.write('		<h1 class="g-logo">퍼블리싱가이드</h1>');
		document.write('		<button type="button" class="g-btn-aside"><span>Menu</span></button>');
		document.write('	</header>');
	},
	aside : {
		init : function(){
			var baseURL = '';
			document.write('	<aside id="g-aside">');
			document.write('		<div class="g-js-scroll g-aside-scroll">');
			document.write('			<nav class="g-snb">');
			document.write('				<!-- Convention -->');
			document.write('				<ul class="g-depth01 g-snbMenu1">');
			document.write('					<li class="g-node1"><a href="'+baseURL+'guide_intro.html">기본환경</a></li>');
			document.write('					<li class="g-node1 plus"><a href="#">규칙가이드</a>');
			document.write('						<ul>');
			document.write('							<li class="g-node1"><a href="'+baseURL+'guide_standard.html">표준규칙</a></li>');
			document.write('							<li class="g-node1"><a href="'+baseURL+'guide_code.html">코드규칙</a></li>');
			document.write('							<li class="g-node1"><a href="'+baseURL+'guide_name.html">네임규칙</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('					<li class="g-node1 plus"><a href="#">스타일 라이브러리</a>');
			document.write('						<ul>');
			document.write('							<li class="g-node1"><a href="'+baseURL+'guide_elements.html">Elements</a></li>');
			document.write('							<li class="g-node1"><a href="'+baseURL+'guide_form.html">Form Elements</a></li>');
			document.write('							<li class="g-node1"><a href="'+baseURL+'guide_board.html">board</a></li>');
			document.write('							<li class="g-node1"><a href="'+baseURL+'guide_table.html">table</a></li>');
			document.write('							<li class="g-node1"><a href="'+baseURL+'guide_popup.html">layer popup</a></li>');
			document.write('							<li class="g-node1"><a href="'+baseURL+'guide_tab.html">tab</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('					<li class="g-node1 plus"><a href="#">웹접근성 점검</a>');
			document.write('						<ul>');
			document.write('							<li class="g-node1"><a href="'+baseURL+'guide_accessibility01.html">웹접근성 개요</a></li>');
			document.write('							<li class="g-node1"><a href="'+baseURL+'guide_accessibility02.html">역할별 체크리스트</a></li>');
			document.write('							<li class="g-node1"><a href="'+baseURL+'guide_accessibility03.html">서식 명칭</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('					<li class="g-node1"><a href="'+baseURL+'../../html/html_list.html" target="_blank">html list</a></li>');
			document.write('				</ul>');
			document.write('				<!-- //Convention -->');
			document.write('			</nav>');
			document.write('		</div>');
			document.write('	</aside>');
		},
	}
}