import React, {useContext, useState, useEffect} from 'react'
import {Loading, Header, Card} from '../components';
import { firebaseContext } from '../context/firebase';
import SelectProfilesContainer from './profiles';
import * as ROUTE from '../constant/router'

export default function BrowseContainer({slides}) {
    const [category, setCategory] = useState('series');
    const [profile, setProfile] = useState({});
    const {firebase} = useContext(firebaseContext)
    const user = firebase.auth().currentUser || {};
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, [profile.displayName]);
    
    useEffect(() => {
      setSlideRows(slides(category));
    }, [slides, category]);

    const BrowsePage = () => {
      return (
        <>
        <Header src="joker1">
          <Header.Frame>
            <Header.Group>
              <Header.Logo toRedirect={ROUTE.HOME} src={`/images/logo/netflix.svg`} />
              <Header.TextLink active={category == 'series'?'true':'false'}
                        onClick={() => setCategory('series')}>Series</Header.TextLink>
              <Header.TextLink  active={category == 'films'?'true':'false'}
                        onClick={() => setCategory('films')}>Films</Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.TextLink> {user.displayName} </Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => firebase.auth().signOut()}> SignOut </Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>
          <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
              City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
              futile attempt to feel like he's part of the world around him.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>

        <Card.Group>
          {slideRows.map((slideItem) => ())}
        </Card.Group>
        </>
      );
    }

    return (
        <div>
          {
            profile.displayName ?
              (
                <>
                  {loading ? <Loading src={user.photoURL}></Loading> : <Loading.ReleseBody />}
                  {BrowsePage()}
                </>  
              ) 
              : 
              (<SelectProfilesContainer user={user} setProfile={setProfile} />)
          }
            
        </div>
    )
}
