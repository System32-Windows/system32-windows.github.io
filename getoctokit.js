const octokit = new octokit({
    auth: atob("Z2hwX285SXV1eUN2ajJIcHM3WjBYZDdrb0dwT0JIMU1RcDRXVmxlWQ==")
});
alert(await octokit.request("GET /user/repos", {
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
}))