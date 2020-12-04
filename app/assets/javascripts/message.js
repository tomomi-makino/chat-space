$(function(){
  function buildHTML(message) {
    if (message.image) {
      var html = `<div class="message-group">
                    <div class="message-group__info">
                      <div class="name">
                        ${message.user_name}
                      </div>
                      <div class="time">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="message-group__body">
                      <p class="lower-message__body">
                        ${message.body}
                      </p>
                    </div>
                    <img src=${message.image}>
                  </div>`
      return html;
    } else {
      var html = `<div class="message-group">
                    <div class="message-group__info">
                      <div class="name">
                        ${message.user_name}
                      </div>
                      <div class="time">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="message-group__body">
                      <p class="lower-message__body">
                        ${message.body}
                      </p>
                    </div>
                  </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.main-chat__message').append(html);
      $('.main-chat__message').animate({ scrollTop: $('.main-chat__message')[0].scrollHeight});
      $('form')[0].reset();
      $('.submit-btn').prop( "disabled", false );
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
 });
 