function appendLog(e) {
    console.log(e)
    $('#log').append('<li>' + JSON.stringify(e) + '</li>')
}

$('#invite').on('click', function () {
    $('#title').text('clicked')
    MessengerExtensions.beginShareFlow(function (response) {
        if (response.is_sent) {
            MessengerExtensions.requestCloseBrowser(function () {
                appendLog('closing webview')
            }, null);
        }
    }, null, {
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: [{
                        title: "Patrick just gave you a gold star!",
                        image_url: "https://i.imgur.com/hfBm4JE.png",
                        subtitle: "Nice!",
                        default_action: {
                            type: "web_url",
                            url: "https://goldpatrick.herokuapp.com"
                        },
                        buttons: [{
                            type: "web_url",
                            url: "https://goldpatrick.herokuapp.com",
                            title: "Oi"
                        }]
                    }]
                }
            }
        }, "current_thread")
})

$(function () {
    var socket = io()
    socket.on('connected', function (data) {
        console.log('io connected')
    })
})

/*
$(function () {
    $('#title').text('not clicked')
    MessengerExtensions.getContext('1668896723154558', function (result) {
        appendLog(result)
    }, function (result) {
        appendLog(result)
    })
})

$('#getStarted').on('click', function () {
    MessengerExtensions.askPermission(function (response) {
        var permissions = response.permissions
        var isGranted = response.isGranted
        if (isGranted) {
            appendLog('permission granted')
        }
    }, function (errorCode, errorMessage) {
        appendLog(errorMessage)
    })
})
*/