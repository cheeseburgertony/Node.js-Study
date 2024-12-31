const fs = require("fs");
const Koa = require("koa");
const KoaRouter = require("@koa/router");
const koaSession = require("koa-session");
const jwt = require("jsonwebtoken");

const app = new Koa();
const userRouter = new KoaRouter({ prefix: "/users" });

// 使用非对称加密，区分公钥和私钥
// 使用私钥进行签名，使用公钥进行验证
const privateKey = fs.readFileSync("./keys/private.key");
const publicKey = fs.readFileSync("./keys/public.key");

userRouter.get("/login", (ctx, next) => {
  // 1.登录成功，颁发token
  const payload = { id: 111, name: "tony" };
  const token = jwt.sign(payload, privateKey, {
    expiresIn: 60,
    algorithm: "RS256",
  });

  ctx.body = {
    code: 0,
    message: "登录成功",
    token,
  };
});

userRouter.get("/list", (ctx, next) => {
  // 2.获取客户端携带的token
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");

  // 验证token
  try {
    jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    });

    ctx.body = {
      code: 0,
      data: [
        { id: 1, name: "tony" },
        { id: 2, name: "ikun" },
        { id: 3, name: "tony" },
        { id: 4, name: "ikun" },
      ],
    };
  } catch (error) {
    ctx.body = {
      code: -1003,
      message: "token过期或无效，没有登录权限，请先登录",
    };
  }
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("Koa服务启动成功~");
});
