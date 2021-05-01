import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Source from "../components/source";
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
  };
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      textAlign: "center",
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  });
});

type Props = {
  siteName: string;
};

const App: React.FC<Props> = ({ siteName }) => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <h1>Hello TypeScript world!</h1>
        </Grid>
        <Grid item xs={6}>
          This site is named <strong>{siteName}</strong>
        </Grid>
        <Grid item xs={6}>
          <Source description="Interested in details of this site?" />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default class IndexPage extends React.Component<IndexPageProps> {
  public render(): JSX.Element {
    const { siteName } = this.props.data.site.siteMetadata;

    return <App siteName={siteName} />;
  }
}
