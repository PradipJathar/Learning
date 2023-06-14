using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Trial.Models;
using Trial.ViewModels;

namespace Trial.Controllers
{
    public class MoviesController : Controller
    {
        // GET: Movies
        public ActionResult Index()
        {
            var movies = GetMovies();

            return View(movies);
        }

        private IEnumerable<Movie> GetMovies()
        {
            return new List<Movie>
            {
                new Movie {Id = 1, Name = "3 Idiots" },
                new Movie {Id = 2, Name = "Lagaan" }
            };
        }



        // GET: Movies/Random
        public ActionResult Random()
        {
            var movie = new Movie() {Name = "ABCD"};

            var customers = new List<Customer>
            {
                new Customer {Name = "PJ"},
                new Customer {Name = "SJ"}
            };

            var viewModel = new RandomMovieViewModel
            { 
                Movie = movie,
                Customers = customers 
            };

            return View(viewModel);
        }

        [Route("movies/released/{year}/{month:regex(\\d{4}):range(1, 12)}")]
        public ActionResult ByReleaseDate(int year, int month)
        {
            return Content($"{year}/{month}");
        }

    }
}