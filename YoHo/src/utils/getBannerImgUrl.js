import axios from 'axios'

export function setBannerWho(tag) {
  let params = new URLSearchParams();
  params.append('bannerWho', tag);
  axios.post('http://localhost/yohoAPI/bannerImgUrl.php', params).
  then(function(response) {
    return response.data
  }).catch(function (error) {
    return error;
  });
}
