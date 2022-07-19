# Kelly criterion

Kelly criterion is a formula that determines how much should you bet, if you know the probability of outcome and the amount gained compared to the bed size.

## Kelly's formula
**Theorem:** Let $p$ be probability of positive outcome, $a$ fraction that is lost in negative outcome, $b$ fraction that is gained in a positive outcome. Then the optimal fraction of current bankroll (or wealth) to wager $f$ is described with formula
$$f = \frac{p}{a} - \frac{1-p}{b}$$

*Proof (heuristic):* Lets say that we ran the experiment $N$-times and there were $K$ positive outcomes ($K \leq N$). Since the rules of the game are the same regardless of the bet size - this might not be true in a real world, the proportion of wealth to wager $f$ is constant. This means that if the outcome is positive our wealth will increase to $1+fb$ and if outcome is negative (we lose) our wealth decreases to $1-fa$. 

As we said above, after we ran the experiment $N$-times our wealth results in $W = (1+fb)^K (1-fa)^{N-K}$. Because we know the probability $p$ the expected number of positive outcomes is $pN$. So for large $N$ wealth $W$ converges to

$$W(f) = (1+fb)^{pN} (1-fa)^{(1-p)N}$$ 

We want to find the maximum of function $W$. Since function $W$ is differentiable and domain is compact ($f \in [-1,1]$), maximum will be one of the stationary points or on bounds.
We can find the derivative of following equation (consider why!)

$$\log(W(f)) = pN \cdot \log(1+fb) + (1-p)N \cdot \log(1-fa)$$

which is

$$\frac{d}{df} \log(W(f)) = pN \cdot \frac{b}{1+fb} - (1-p)N \cdot \frac{a}{1-fa}$$

To find stationary points we equate upper expression to zero and solve for $f$:

$$pN \cdot \frac{b}{1+fb} - (1-p)N \cdot \frac{a}{1-fa} = 0$$

$$\frac{bp(1-fa)- a(1-p)(1+fb)}{(1+fb)(1-fa)} = 0 \iff bp(1-fa)- a(1-p)(1+fb) = 0$$

and this simplifies to what we were looking for - Kelly criterion:

$$f = \frac{p}{a} - \frac{1-p}{b}$$

Q.E.D.

## Further reading and resources
- [Kelly criterion - wikipedia](https://en.wikipedia.org/wiki/Kelly_criterion)
- [original Kelly's paper](https://www.princeton.edu/~wbialek/rome/refs/kelly_56.pdf)
- [Thorp's paper](https://wayback.archive-it.org/all/20090320125959/http://www.edwardothorp.com/sitebuildercontent/sitebuilderfiles/KellyCriterion2007.pdf)



