'use strict';


// 1定义
// 2消息（1字头）
// ▪ 100 Continue
// ▪ 101 Switching Protocols
// ▪ 102 Processing
// 3成功（2字头）
// ▪ 200 OK
// ▪ 201 Created
// ▪ 202 Accepted
// ▪ 203 Non-Authoritative Information
// ▪ 204 No Content
// ▪ 205 Reset Content
// ▪ 206 Partial Content
// ▪ 207 Multi-Status
// 4重定向（3字头）
// ▪ 300 Multiple Choices
// ▪ 301 Moved Permanently
// ▪ 302 Move temporarily
// ▪ 303 See Other
// ▪ 304 Not Modified
// ▪ 305 Use Proxy
// ▪ 306 Switch Proxy
// ▪ 307 Temporary Redirect
// 5请求错误（4字头）
// ▪ 400 Bad Request
// ▪ 401 Unauthorized
// ▪ 402 Payment Required
// ▪ 403 Forbidden
// ▪ 404 Not Found
// ▪ 405 Method Not Allowed
// ▪ 406 Not Acceptable
// ▪ 407 Proxy Authentication Required
// ▪ 408 Request Timeout
// ▪ 409 Conflict
// ▪ 410 Gone
// ▪ 411 Length Required
// ▪ 412 Precondition Failed
// ▪ 413 Request Entity Too Large
// ▪ 414 Request-URI Too Long
// ▪ 415 Unsupported Media Type
// ▪ 416 Requested Range Not Satisfiable
// ▪ 417 Expectation Failed
// ▪ 421 There are too many connections from your internet address
// ▪ 422 Unprocessable Entity
// ▪ 423 Locked
// ▪ 424 Failed Dependency
// ▪ 425 Unordered Collection
// ▪ 426 Upgrade Required
// ▪ 449 Retry With
// 6服务器错误（5字头）
// ▪ 500 Internal Server Error
// ▪ 501 Not Implemented
// ▪ 502 Bad Gateway
// ▪ 503 Service Unavailable
// ▪ 504 Gateway Timeout
// ▪ 505 HTTP Version Not Supported
// ▪ 506 Variant Also Negotiates
// ▪ 507 Insufficient Storage
// ▪ 509 Bandwidth Limit Exceeded
// ▪ 510 Not Extended
// ▪ 600 Unparseable Response Headers

// 请求失败，Request is invalid
const BadRequest = {
    status: 400,
    message: {
        statusCode: 400001,
        message: '请求失败',
    },
};
// 请求失败，Request is invalid
const BadRequestParams = {
    status: 400,
    message: {
        statusCode: 400001,
        message: '请求失败,参数出错',
    },
};
// 请求的token是无效的,Token is invalid
const TokenInvalid = {
    status: 401,
    message: {
        statusCode: 401001,
        message: '请求的token是无效的',
    },
};

// 请求非法, Request is forbidden
const Forbidden = {
    status: 403,
    message: {
        statusCode: 403001,
        message: '请求非法',
    },
};

// 用户已经存在,User Already Exist
const UserAlreadyExist = {
    status: 403,
    message: {
        statusCode: 403002,
        message: '用户已经存在',
    },
};

// 用户没有找到,Can not find the user
const UserNotFound = {
    status: 403,
    message: {
        statusCode: 403003,
        message: '用户没有找到',
    },
};

// 密码不正确,The password is incorrect
const PasswordIncorrect = {
    status: 403,
    message: {
        statusCode: 403004,
        message: '密码不正确',
    },
};

// 达到最大重试次数,Reached the max attemps
const MaxAttemps = {
    status: 403,
    message: {
        statusCode: 403005,
        message: '达到最大重试次数',
    },
};

// 未找到对应api,Request not found'
const NotFound = {
    status: 404,
    message: {
        statusCode: 404001,
        message: '未找到对应api',
    },
};

// 违反唯一约束,Unique constraint failed for this request
const Conflict = {
    status: 409,
    message: {
        statusCode: 409001,
        message: '违反唯一约束',
    },
};

// 不支持的请求,Unsupported protocol version
const Unsupported = {
    status: 410,
    message: {
        statusCode: 410001,
        message: '不支持的请求',
    },
};

// 超出内容限制,Over capacity
const OverCapacity = {
    status: 412,
    message: {
        statusCode: 412001,
        message: '超出内容限制',
    },
};

// 请求体过长,Request entity is too large
const TooLarge = {
    status: 413,
    message: {
        statusCode: 413001,
        message: '请求体过长',
    },
};

const verifyCodeTooLarge = {
    status: 413,
    message: {
        statusCode: 413002,
        message: '验证码超过长度限制',
    },
};

const LOCKED = {
    status: 423,
    message: {
        statusCode: 423001,
        message: '账户已被封禁',
    },
};
// 依赖检查失败,This request failed because its dependencies is missing or invalid
const DependencyFailure = {
    status: 424,
    message: {
        statusCode: 424001,
        message: '依赖检查失败',
    },
};

// 请使用https安全通道请求,This request require HTTPS to ensure security
const Insecure = {
    status: 426,
    message: {
        statusCode: 426001,
        message: '请使用https安全通道请求',
    },
};

// 未知服务器内部错误,ServerInternalError
const ServerInternalError = {
    status: 500,
    message: {
        statusCode: 500001,
        message: '服务器开小差了',
    },
};


// 未知nginx内部错误,Upstream service error
const UpstreamError = {
    status: 502,
    message: {
        statusCode: 502001,
        message: '未知nginx内部错误',
    },
};

// 未知服务器内部错误,ServerInternalError
const ServerMaintain = {
    status: 503,
    message: {
        statusCode: 503001,
        message: '服务器正在维护',
    },
};

class Successful {
    constructor () {
        this.result = {
            status: 200,
            message: 'successful',
            result: '',
        };
    }

    get default () {
        return this.result;
    }

    custom (result) {
        return {
            status: this.result.status,
            message: this.result.message,
            result,
        };
    }
}

module.exports = {
    ServerMaintain, // 服务器正在维护
    UpstreamError, // 未知的nginx内部错误
    ServerInternalError, // 服务器开小差了 500
    Insecure, // 请使用https安全通道请求
    DependencyFailure, // 依赖检查失败
    LOCKED, // 账户已被封禁
    verifyCodeTooLarge, // 验证码超过长度限制
    TooLarge, // 请求体过长
    OverCapacity, // 超出内容限制
    Unsupported, // 不支持的请求
    Conflict, // 违反唯一约束
    NotFound, // 未找到对应api
    PasswordIncorrect, // 密码不正确
    UserNotFound, // 用户没有找到
    UserAlreadyExist, // 用户已经存在
    Forbidden, // 请求非法
    TokenInvalid, // 请求的token是无效的
    BadRequestParams, // 请求失败,参数出错
    BadRequest, // 请求失败
    Successful, // 请求成功
    MaxAttemps, // 达到最大重试次数
};