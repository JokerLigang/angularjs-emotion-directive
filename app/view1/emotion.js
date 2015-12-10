/**
 * Created by Joker on 2015/12/10.
 */
//为我们的应用创建一个module
angular.module('emotion',[])
.directive('emotion', function () {
    return{
        restrict:'AE',
        replace: true,
        scope:{
            currentFace:'=',
            emotionshow:'='
        },
        templateUrl:'view1/emotion.html',
        link: function(scope, element, attrs) {
            scope.emotionGroup=[
                {
                    "index": 1,
                    "src": "TB1vsvmGVXXXXcEaXXX1ElnIXXX-64-64.png",
                    "title": "微笑"
                },
                {
                    "index": 2,
                    "src": "TB1v.HoGVXXXXb_XVXX1ElnIXXX-64-64.png",
                    "title": "憨笑"
                },
                {
                    "index": 3,
                    "src": "TB1Ln6oGVXXXXbGXVXXHQTKFFXX-64-64.png",
                    "title": "色"
                },
                {
                    "index": 4,
                    "src": "TB1Q3jxGVXXXXbvXXXX1ElnIXXX-64-64.png",
                    "title": "发呆"
                },
                {
                    "index": 5,
                    "src": "TB152zvGVXXXXasXpXX1ElnIXXX-64-64.png",
                    "title": "老板"
                },
                {
                    "index": 6,
                    "src": "TB1pIHtGVXXXXXWXFXX1ElnIXXX-64-64.png",
                    "title": "流泪"
                },
                {
                    "index": 7,
                    "src": "TB1cILtGVXXXXc1XpXX1ElnIXXX-64-64.png",
                    "title": "害羞"
                },
                {
                    "index": 8,
                    "src": "TB16a_pGVXXXXbrXVXX1ElnIXXX-64-64.png",
                    "title": "闭嘴"
                },
                {
                    "index": 9,
                    "src": "TB1Z.HoGVXXXXb5XVXXHQTKFFXX-64-64.png",
                    "title": "睡"
                },
                {
                    "index": 10,
                    "src": "TB1H7rwGVXXXXcMXXXX1ElnIXXX-64-64.png",
                    "title": "大哭"
                },
                {
                    "index": 11,
                    "src": "TB1tB_pGVXXXXaUXVXX1ElnIXXX-64-64.png",
                    "title": "尴尬"
                },
                {
                    "index": 12,
                    "src": "TB1RQYrGVXXXXbcXFXX1ElnIXXX-64-64.png",
                    "title": "发怒"
                },
                {
                    "index": 13,
                    "src": "TB1qSjvGVXXXXcWXXXX1ElnIXXX-64-64.png",
                    "title": "调皮"
                },
                {
                    "index": 14,
                    "src": "TB18VabGpXXXXaLapXX1ElnIXXX-64-64.png",
                    "title": "大笑"
                },
                {
                    "index": 15,
                    "src": "TB12pvpGVXXXXb6XVXX1ElnIXXX-64-64.png",
                    "title": "惊讶"
                },
                {
                    "index": 16,
                    "src": "TB167YqGVXXXXXHXVXX1ElnIXXX-64-64.png",
                    "title": "流汗"
                },
                {
                    "index": 17,
                    "src": "TB1e2PxGVXXXXbHXXXX1ElnIXXX-64-64.png",
                    "title": "广播"
                },
                {
                    "index": 18,
                    "src": "TB1unzvGVXXXXXTXpXX1ElnIXXX-64-64.png",
                    "title": "阴笑"
                },
                {
                    "index": 19,
                    "src": "TB1dMYtGVXXXXXoXFXX1ElnIXXX-64-64.png",
                    "title": "你强"
                },
                {
                    "index": 20,
                    "src": "TB1226zGVXXXXXlXpXX1ElnIXXX-64-64.png",
                    "title": "怒吼"
                },
                {
                    "index": 21,
                    "src": "TB1aEnsGVXXXXacXFXX1ElnIXXX-64-64.png",
                    "title": "惊愕"
                },
                {
                    "index": 22,
                    "src": "TB110.kGFXXXXbAaXXX1ElnIXXX-64-64.png",
                    "title": "疑问"
                },
                {
                    "index": 23,
                    "src": "TB1mf6pGVXXXXbpXVXX1ElnIXXX-64-64.png",
                    "title": "OK"
                },
                {
                    "index": 24,
                    "src": "TB1cP2rGVXXXXbFXFXX1ElnIXXX-64-64.png",
                    "title": "鼓掌"
                },
                {
                    "index": 25,
                    "src": "TB1vQHrGVXXXXa.XFXX1ElnIXXX-64-64.png",
                    "title": "握手"
                },
                {
                    "index": 26,
                    "src": "TB1sWjqGVXXXXXtXVXX1ElnIXXX-64-64.png",
                    "title": "偷笑"
                },
                {
                    "index": 27,
                    "src": "TB1psrtGVXXXXXSXFXX1ElnIXXX-64-64.png",
                    "title": "无聊"
                },
                {
                    "index": 28,
                    "src": "TB1lw2sGVXXXXaZXFXX1ElnIXXX-64-64.png",
                    "title": "加油"
                },
                {
                    "index": 29,
                    "src": "TB1q4DoGVXXXXcOXVXXHQTKFFXX-64-64.png",
                    "title": "快哭了"
                },
                {
                    "index": 30,
                    "src": "TB1ugLtGVXXXXXiXFXXHQTKFFXX-64-64.png",
                    "title": "吐"
                },
                {
                    "index": 31,
                    "src": "TB13RHoGVXXXXXhaXXXHQTKFFXX-64-64.png",
                    "title": "晕"
                },
                {
                    "index": 32,
                    "src": "TB1cwjuGVXXXXb3XpXX1ElnIXXX-64-64.png",
                    "title": "摸摸"
                },
                {
                    "index": 33,
                    "src": "TB1BXYxGVXXXXcbXXXX1ElnIXXX-64-64.png",
                    "title": "胜利"
                },
                {
                    "index": 34,
                    "src": "TB1snjtGVXXXXcMXpXX1ElnIXXX-64-64.png",
                    "title": "飞吻"
                },
                {
                    "index": 35,
                    "src": "TB1ZLPnGVXXXXaEaXXX1ElnIXXX-64-64.png",
                    "title": "跳舞"
                },
                {
                    "index": 36,
                    "src": "TB1PcDxGVXXXXb4XXXX1ElnIXXX-64-64.png",
                    "title": "傻笑"
                },
                {
                    "index": 37,
                    "src": "TB1fF2xGVXXXXb.XXXX1ElnIXXX-64-64.png",
                    "title": "鄙视"
                },
                {
                    "index": 38,
                    "src": "TB1AkTpGVXXXXaOXVXXHQTKFFXX-64-64.png",
                    "title": "嘘"
                },
                {
                    "index": 39,
                    "src": "TB1b02pGVXXXXbtXVXXHQTKFFXX-64-64.png",
                    "title": "衰"
                },
                {
                    "index": 40,
                    "src": "TB1tNftGVXXXXXsXFXX1ElnIXXX-64-64.png",
                    "title": "思考"
                },
                {
                    "index": 41,
                    "src": "TB1vHrwGVXXXXXhXpXX1ElnIXXX-64-64.png",
                    "title": "亲亲"
                },
                {
                    "index": 42,
                    "src": "TB1sZfuGVXXXXb0XpXX1ElnIXXX-64-64.png",
                    "title": "无奈"
                },
                {
                    "index": 43,
                    "src": "TB1_HvwGVXXXXXlXpXX1ElnIXXX-64-64.png",
                    "title": "感冒"
                },
                {
                    "index": 44,
                    "src": "TB1_VrqGVXXXXavXVXXHQTKFFXX-64-64.png",
                    "title": "对不起"
                },
                {
                    "index": 45,
                    "src": "TB1pVPzGVXXXXXcXXXX1ElnIXXX-64-64.png",
                    "title": "再见"
                },
                {
                    "index": 46,
                    "src": "TB1OYbvGVXXXXa6XpXX1ElnIXXX-64-64.png",
                    "title": "投降"
                },
                {
                    "index": 47,
                    "src": "TB1XsfrGVXXXXcIXFXXHQTKFFXX-64-64.png",
                    "title": "哼"
                },
                {
                    "index": 48,
                    "src": "TB15bHrGVXXXXcJXFXX1ElnIXXX-64-64.png",
                    "title": "欠扁"
                },
                {
                    "index": 49,
                    "src": "TB1S6boGVXXXXXpaXXX1ElnIXXX-64-64.png",
                    "title": "恭喜"
                },
                {
                    "index": 50,
                    "src": "TB1rJUoGFXXXXaOXVXX1ElnIXXX-64-64.png",
                    "title": "可怜"
                },
                {
                    "index": 51,
                    "src": "TB1eArnGVXXXXbVaXXX1ElnIXXX-64-64.png",
                    "title": "舒服"
                },
                {
                    "index": 52,
                    "src": "TB1cffvGVXXXXaBXpXX1ElnIXXX-64-64.png",
                    "title": "爱意"
                },
                {
                    "index": 53,
                    "src": "TB1i2roGVXXXXX9aXXX1ElnIXXX-64-64.png",
                    "title": "单挑"
                },
                {
                    "index": 54,
                    "src": "TB1avTqGVXXXXXsXVXX1ElnIXXX-64-64.png",
                    "title": "财迷"
                },
                {
                    "index": 55,
                    "src": "TB1ZPvnGVXXXXccaXXX1ElnIXXX-64-64.png",
                    "title": "迷惑"
                },
                {
                    "index": 56,
                    "src": "TB1IwHxGVXXXXbHXXXX1ElnIXXX-64-64.png",
                    "title": "委屈"
                },
                {
                    "index": 57,
                    "src": "TB17P6pGVXXXXa0XVXX1ElnIXXX-64-64.png",
                    "title": "灵感"
                },
                {
                    "index": 58,
                    "src": "TB1K_DrGVXXXXbrXFXX1ElnIXXX-64-64.png",
                    "title": "天使"
                },
                {
                    "index": 59,
                    "src": "TB1bBHxGVXXXXbhXXXX1ElnIXXX-64-64.png",
                    "title": "鬼脸"
                },
                {
                    "index": 60,
                    "src": "TB1SF6qGVXXXXanXVXX1ElnIXXX-64-64.png",
                    "title": "凄凉"
                },
                {
                    "index": 61,
                    "src": "TB1YAPwGVXXXXcMXXXX1ElnIXXX-64-64.png",
                    "title": "郁闷"
                },
                {
                    "index": 62,
                    "src": "TB1.66rGVXXXXb8XFXX1ElnIXXX-64-64.png",
                    "title": "发烧"
                },
                {
                    "index": 63,
                    "src": "TB16ajsGVXXXXbiXFXX1ElnIXXX-64-64.png",
                    "title": "邪恶"
                },
                {
                    "index": 64,
                    "src": "TB1_4LxGVXXXXX.XXXX1ElnIXXX-64-64.png",
                    "title": "忍者"
                },
                {
                    "index": 65,
                    "src": "TB1RV_pGVXXXXbBXVXX1ElnIXXX-64-64.png",
                    "title": "炸弹"
                },
                {
                    "index": 66,
                    "src": "TB1m9DvGVXXXXcvXXXX1ElnIXXX-64-64.png",
                    "title": "邮件"
                },
                {
                    "index": 67,
                    "src": "TB1PoTsGVXXXXahXFXX1ElnIXXX-64-64.png",
                    "title": "电话"
                },
                {
                    "index": 68,
                    "src": "TB1F2TxGVXXXXbJXXXX1ElnIXXX-64-64.png",
                    "title": "礼物"
                },
                {
                    "index": 69,
                    "src": "TB1QtYuGVXXXXceXpXX1ElnIXXX-64-64.png",
                    "title": "爱心"
                },
                {
                    "index": 70,
                    "src": "TB111YvGVXXXXaDXpXX1ElnIXXX-64-64.png",
                    "title": "心碎"
                },
                {
                    "index": 71,
                    "src": "TB1_tzpGVXXXXbDXVXX1ElnIXXX-64-64.png",
                    "title": "嘴唇"
                },
                {
                    "index": 72,
                    "src": "TB1scjKGFXXXXaraXXX1ElnIXXX-64-64.png",
                    "title": "鲜花"
                },
                {
                    "index": 73,
                    "src": "TB1nq_uGVXXXXcqXpXX1ElnIXXX-64-64.png",
                    "title": "残花"
                },
                {
                    "index": 74,
                    "src": "TB1..YpGVXXXXXDXVXX1ElnIXXX-64-64.png",
                    "title": "出差"
                },
                {
                    "index": 75,
                    "src": "TB1G1pAGVXXXXatXpXX1ElnIXXX-64-64.png",
                    "title": "干杯"
                }
            ];

            //angular.element(document).bind('click', function(event) {
            //    var pop = angular.element("#J-face");
            //    var isClickPop = pop.is(event.target) || pop.has(event.target).length > 0;
            //    // 点击的区域是popover的区域，不处理
            //    if (isClickPop) {
            //       return;
            //
            //    }else{
            //        scope.emotionshow=false;
            //        scope.$apply();
            //
            //    }
            //
            //});
            scope.getEmoTitle=function(){
                scope.currentFace="["+this.item.title+"]";
                scope.emotionshow=false;
            }
        }
    }

});