var params={
    b: () => {
        var p=new window.URLSearchParams(window.location.search);
        var user = p.get('name')
        console.log(user);
        $('#user').text(user);
    },


}
params.b();