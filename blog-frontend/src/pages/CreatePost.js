import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'redux/modules/base';

const CreatePost = () => {
    return (
        <div>
            createpost
        </div>
    );
};

export default connect(
    (state) => ({
        
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch) 
    })
  ) (CreatePost);