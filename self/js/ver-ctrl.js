
// window.onload = () => {
//   console.log("calc blog version block...")
//   fetch('/version.txt?' + Math.random())
//     .then(resp => {
//       return resp.text()
//     })
//     .then(text => {
//       var ver = window.location.search
//       if (ver && ver != '?' + text) {
//         console.log("Found new version. Redirecting...")
//         window.location = window.location.origin + window.location.pathname + '?' + window.location.hash
//         return
//       }
//       if (!ver) {
//         console.log("Found new version. Redirecting...")
//         window.location = window.location.origin + window.location.pathname + '?' + text + window.location.hash
//         return
//       }
//     })
// }

