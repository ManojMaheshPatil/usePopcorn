
# usePopcorn

A Watchlist App , where you can search for Movie Details from the IMDb database , where you can give your own custom ratings as well as add/remove it from your watchlist. Built mainly using React Hooks. 




## Functionalities:

- Search for Movies using OMDb api.
- Get the details of the movie : actors , directors, IMDb ratings, year of release , genre etc.
- Give your own personal rating.
- Add/Remove the movie from the watchlist


## How to get OMDb API Key:

To fetch the movies , we make use of OMDb api . It is a free api , but it comes with a limit. It has a limit of 1000 requests per day so make sure you don't exhaust it by causing an infinite re-render.

The steps to get your own OMDb api key are:

- Go to https://www.omdbapi.com/apikey.aspx
- Select the free option
- Enter your Name and Gmail and the reason why you want the key.
- You'll get an email to your registered email , you'll find a link in there which might look like this "https://www.omdbapi.com/?i=tt3896198&apikey=xxxxxxxx"
- Grab the last part (xxxxxxxx) , the numbers after &apikey= , that is your own API key , do not share it with anyone else.
- Now copy paste the key in line 10 of app.js file , and voila it should work !

## Images:

- The layout of the app.
![1](https://github.com/ManojMaheshPatil/usePopcorn/assets/54990161/4ce42f58-90b1-4bd9-a17d-373fdd9eafca)

- When you search for a movie.
![2](https://github.com/ManojMaheshPatil/usePopcorn/assets/54990161/228f3f56-defd-4706-9d99-5b908dfcb2d8)

- When you click on a particular movie.
![3](https://github.com/ManojMaheshPatil/usePopcorn/assets/54990161/b6bdcb7e-a5a7-4414-9310-65a54184fa5b)

- You can add your own ratings.
![4](https://github.com/ManojMaheshPatil/usePopcorn/assets/54990161/82f39ee5-3050-4381-b7c6-35aedeb6cc6e)

- When you add the movie to your watchlist.
  ![5](https://github.com/ManojMaheshPatil/usePopcorn/assets/54990161/ea32598b-b625-4e76-8259-8f253f3784ec)
