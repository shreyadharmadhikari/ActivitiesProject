using Application.Activities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddCors((opt) =>
                {
                    opt.AddPolicy("CorsPolicy", policy =>
                    {
                        policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                    });
                });

            services.AddMediatR(typeof(List.Handler));

            services.AddDbContext<DataContext>(
                    opt =>
                    {
                        opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
                    }
                );

            return services;

        }
    }
}