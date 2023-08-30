$.ajax({
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=f5f6ff16d59df52e9bbe6b76f88b7886&language=en&with_genres=' + id + '&page=' + page,
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        
    }
});