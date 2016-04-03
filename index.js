var xhr = require('xhr')

xhr.get('http://google.com', function(err, data) {
  if (err) // do something

  console.log(data)
})

