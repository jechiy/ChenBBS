document.writeln("");
document.writeln("<script type=\"text/javascript\">");
document.writeln("");
document.writeln("(function qnav(){");
document.writeln("		var oQuickNav = document.getElementById(\"quick_nav\");");
document.writeln("		var oQuickNavDiv = oQuickNav.getElementsByTagName(\"div\");");
document.writeln("		var oBtn = true;");
document.writeln("		oQuickNavDiv[0].onclick = function (){");
document.writeln("			if(oBtn == true){");
document.writeln("				this.className = \"quick_btn current\";");
document.writeln("				oQuickNavDiv[1].className = \"quick_con show\";");
document.writeln("			}else{");
document.writeln("				this.className = \"quick_btn\";");
document.writeln("				oQuickNavDiv[1].className = \"quick_con hide\";");
document.writeln("			}");
document.writeln("			oBtn = !oBtn;");
document.writeln("		}");
document.writeln("");
document.writeln("})();");
document.writeln("</script>");