import request from "@/utils/request";

// 图片验证码
export const getImageCode = (clientToken) => {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    responseType: "blob",
  });
};

/**
 * 发送登录请求
 * @param {String} data loginName
 * @returns
 */
export function login(data) {
  return request({
    url: "/api/user-service/user/login",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
}

// 获取用户基本信息
export const getUserInfo = (id) => {
  return request({
    url: `/api/user-service/user/${id}`,
  });
};
