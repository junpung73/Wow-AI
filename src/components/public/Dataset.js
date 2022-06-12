import { Grid, styled } from "@mui/material";
import React from "react";

const Picture = styled(Grid)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const Contain = styled('div')(({ theme }) => ({
  padding: "10vh",
  [theme.breakpoints.down("md")]: {
    padding: "0",
  },
}));

const Dataset = () => {
  return (
    <Contain id='dataset'>
      <div className="contain" style={{ paddingBottom: "10vh" }}>
        <Grid container spacing={2}>
          <Picture item xs={5}>
            <img
              src="/images/image20.png"
              alt="dataset"
              style={{ width: "100%", borderRadius: "30px" }}
            />
          </Picture>
          <Grid item xs={12} md={7}>
            <div
              style={{
                fontSize: "var(--medium-text-2)",
                fontWeight: "bold",
              }}
            >
              Want to build your own
              <span style={{ color: "var(--secondary-bg)" }}> dataset </span>?
            </div>
            <p>
              Contact us now to learn how we can collect a custom dataset for
              your unique AI solution.
            </p>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <label for="exampleInputEmail1" class="form-label">
                  First name *
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </Grid>
              <Grid item xs={6}>
                <label for="exampleInputPassword1" class="form-label">
                  Last name *
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </Grid>
              <Grid item xs={12}>
                <label for="exampleInputEmail1" class="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </Grid>
              <Grid item xs={6}>
                <label for="exampleInputEmail1" class="form-label">
                  Telephone *
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </Grid>
              <Grid item xs={6}>
                <label for="exampleInputPassword1" class="form-label">
                  Company *
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </Grid>
              <Grid item xs={12}>
                <label for="exampleFormControlTextarea1" class="form-label">
                  Comments
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </Grid>
              <Grid item xs={12}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    type="submit"
                    class="btn btn-dark"
                    style={{ padding: "1vh 8vh" }}
                  >
                    Submit
                  </button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Contain>
  );
};

export default Dataset;
