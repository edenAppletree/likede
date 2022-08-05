import request from '@/utils/request'

// 获取运营工单详细数据
export const getOpreateInfo = () => {
    return request({
      url: "/api/task-service/task/search",
    });
}