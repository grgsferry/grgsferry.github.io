---
title: "Geospatial Grid Indexing"
date: "2026-06-16"
description: "A short guide on one of spatial analysis' bread-and-butter."
tags: ["Tutorial"]
draft: true
---

Before we start, I want to note that we won't go into details on how geospatial indexing and geospatial grid indexing created and worked in the background, but more on understanding how it is utilized.

## Introduction

It is common to see maps in a dashboard or an analysis. Data breakdown by countries, region, or cities are also familiar sights. It is so common, that in popular visualization tools, string data that contains common area name (countries, region, cities) could automatically "understood" and transformed to geographical data, a type of data that also contains the area's border and can be visualized in a layer on top of the map.

_They key concept here is: "an area is represented by a name or an ID"._

Let's say you are currently counting the number of trees per area of some cities. When you think of Los Angeles, you can imagine a shape/an area. You would also know that another city, like San Francisco, has a shape/area that does not intersects with each other. Because each of them has its border created administratively and definitively different. Hence the analysis can be continued as is.

But what if you need to count the number of trees per area of some junctions in a city? Now comes a problem, you do not have the "fair" and "right" border to use just yet. Should you use a circle, square, or other shape area? Should the junction becomes the center or the junction could be wherever inside the area? What's the fair size of the area? What if the junction is so closely positioned that it could have intersecting areas, which would cause non-MECE condition?

## Solution

There's an "instant" way to answer these questions, and it is geospatial indexing. More specifically, geospatial grid indexing. It is a way to split/break and give unique IDs to areas on Earth by approximately identical shape and relative size, not intersecting with each other. When applied, it creates cells, where each cell contains an ID and a geographical border.

So far in my experience, here are the widely used used geospatial indexing method and the differences:
| Name | Creator | Shape Type | Cell Size | Projection | Link
| :--- | :--- | :--- | :--- | :--- | :--- |
| S2 | Google | Square | Approx. from ~85 mio. $km^2$ to ~1 $cm^2$ | Spherical Cube | https://s2geometry.io/
| H3 | Uber | Hexagon and/or Pentagon | Approx from ~2.5 mio $km^2$ to ~0.5 $m^2$ | Icosahedron (20 faced cube) | https://h3geo.org/
| Quadbin | CARTO | Square | Approx. from ~510 mio. $km^2$ (entire world) to <1 $m^2$ | Web Mercator | https://docs.carto.com/data-and-analysis/analytics-toolbox-for-postgresql/key-concepts/spatial-indexes#quadbin
| GeoHash | Gustavo Niemeyer | Square | ? | Web Mercator | https://en.wikipedia.org/wiki/Geohash

But why we need it? In my current observation so far working in spatial data-heavy businesses (Gojek, ShopeeFood):

1. Aggregation
2. Location ID-ing and identification
3. Creating shapes that consisted of cells
4. Same language and standardized method of referring to an area

## Usage

---

_This blog post is written by human. LLM is only used for grammar checking._
