function createLabel( label ) {
    document.querySelector( '.js-new-label-name-input' ).value = label.name;
    document.querySelector( '.js-new-label-description-input' ).value = label.description;
    document.querySelector( '.js-new-label-color-input' ).value = '#' + label.color;
    document.querySelector( '.js-details-target ~ .btn-primary' ).disabled = false;
    document.querySelector( '.js-details-target ~ .btn-primary' ).click();
}

function updateLabel( label ) {
    let updatedLabel = false;
    [].slice.call( document.querySelectorAll( '.js-labels-list-item' ) ).forEach( element => {
        if ( element.querySelector( '.js-label-link' ).textContent.trim() === label.name ) {
            updatedLabel = true;
            element.querySelector( '.js-edit-label' ).click();
            element.querySelector( '.js-new-label-name-input' ).value = label.name;
            element.querySelector( '.js-new-label-description-input' ).value = label.description;
            element.querySelector( '.js-new-label-color-input' ).value = '#' + label.color;
            element.querySelector( '.js-edit-label-cancel ~ .btn-primary' ).click();
        }
    });
    return updatedLabel;
}

function createOrUpdate( label ) {
    if ( !updateLabel( label ) ) {
        createLabel( label );
    }
}

[
    {
      "name": "help wanted",
      "color": "008672",
      "description": "Extra attention is needed"
    },
    {
      "name": "priority: critical",
      "color": "b60205",
      "description": ""
    },
    {
      "name": "priority: high",
      "color": "d93f0b",
      "description": ""
    },
    {
      "name": "priority: low",
      "color": "0e8a16",
      "description": ""
    },
    {
      "name": "priority: medium",
      "color": "fbca04",
      "description": ""
    },
    {
      "name": "status: can't reproduce",
      "color": "fec1c1",
      "description": ""
    },
    {
      "name": "status: confirmed",
      "color": "215cea",
      "description": ""
    },
    {
      "name": "status: duplicate",
      "color": "cfd3d7",
      "description": "This issue or pull request already exists"
    },
    {
      "name": "status: needs information",
      "color": "fef2c0",
      "description": ""
    },
    {
      "name": "status: wont do/fix",
      "color": "eeeeee",
      "description": "This will not be worked on"
    },
    {
      "name": "type: bug",
      "color": "d73a4a",
      "description": "Something isn't working"
    },
    {
      "name": "type: discussion",
      "color": "d4c5f9",
      "description": ""
    },
    {
      "name": "type: documentation",
      "color": "006b75",
      "description": ""
    },
    {
      "name": "type: enhancement",
      "color": "84b6eb",
      "description": ""
    },
    {
      "name": "type: epic",
      "color": "3E4B9E",
      "description": "A theme of work that contain sub-tasks"
    },
    {
      "name": "type: feature request",
      "color": "fbca04",
      "description": "New feature or request"
    },
    {
      "name": "type: question",
      "color": "d876e3",
      "description": "Further information is requested"
    }
  ].forEach( label => createOrUpdate( label ) );