<template>
  <footer class="app-footer">
    <div class="container">
      <!-- 联系我们 -->
      <div class="cantact">
        <dl>
          <dt>客户服务</dt>
          <dd><i class="iconfont icon-kefu"></i>在线客服</dd>
          <dd><i class="iconfont icon-question"></i>问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
          <dd><i class="iconfont icon-weibo"></i> 微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>客服热线</dt>
          <dd class="hotline">400-0000-000<small>周一至周日 8:00-18:00</small></dd>
        </dl>
      </div>
    </div>
    <!-- 其他 -->
    <div class="extra">
      <!-- 标语 -->
      <div class="slogan">
        <a href="javascript:;">
          <i class="iconfont icon-footer01"></i>
          <span>价格亲民</span>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-footer02"></i>
          <span>物流快捷</span>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-footer03"></i>
          <span>品质新鲜</span>
        </a>
      </div>
      <!-- 版权信息 -->
      <div class="copyright">
        <ul>
          <li><a href="javascript:;">关于我们</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">售后服务</a></li>
          <li><a href="javascript:;">配送与验收</a></li>
          <li><a href="javascript:;">商务合作</a></li>
          <li><a href="javascript:;">搜索推荐</a></li>
          <li><a href="javascript:;">友情链接</a></li>
        </ul>
        <p>CopyRight © 小兔鲜儿</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  height: 630px;
  border-top: 2px solid #e4e4e4;

  .cantact {
    display: flex;
    align-items: center;
    margin: 65px 0;

    dl {
      height: 190px;
      text-align: center;
      padding: 0 75px;
      border-left: 2px solid #e0d4d4;

      &:first-child {
        padding-left: 0;
        border-left: none;
      }

      &:last-child {
        padding-right: 0;
      }

      dt {
        margin-bottom: 35px;
        font-size: 18px;
        text-align: center;
        color: #999;
      }

      dd {
        float: left;
        width: 93px;
        height: 93px;
        background-color: #fff;
        border: 1px solid #ededed;
        font-size: 14px;
        color: #999;

        + dd {
          margin-left: 10px;
        }

        .iconfont {
          margin-top: 6px;
          display: block;
          font-size: 36px;
          color: #666;
        }

        &:hover {
          .iconfont {
            color: $xtxColor;
          }
        }
      }
      .qrcode {
        padding: 6px;
        width: 116px;
        height: 116px;
        background-color: #fff;
      }

      .download {
        display: flex;
        align-items: start;
        flex-direction: column;
        background-color: inherit;
        border: none;

        span {
          line-height: 1.5;
        }

        a {
          margin-top: auto;
          width: 105px;
          height: 35px;
          background-color: $xtxColor;
          color: #fff;
          line-height: 35px;
        }
      }

      .hotline {
        margin-top: 22px;
        width: 100%;
        background-color: inherit;
        border: none;
        font-size: 22px;
        color: #666;
        small {
          display: block;
          font-size: 15px;
          line-height: 2;
        }
      }
    }
  }
  .extra {
    overflow: hidden;
    height: 343px;
    background-color: #333;
    .slogan {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      padding: 50px 100px;
      border-bottom: 2px solid #434343;
      width: 1338px;

      a {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 28px;
        .iconfont {
          margin-right: 15px;
          font-size: 58px;
        }
      }
    }
    .copyright {
      margin: 0 auto;
      color: #999;
      font-size: 15px;

      ul {
        display: flex;
        justify-content: center;
        margin: 40px 0 15px;

        li {
          a {
            display: block;
            padding: 0 10px;
            line-height: 1;
            color: #999;
          }

          + li a {
            border-left: 1px solid #999;
          }
        }
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
