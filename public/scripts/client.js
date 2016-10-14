//document load
$(function () {

  getInfo();
  getPetInfo();

  $('.ownerRegister').on('click', ownerRegister);

  $('.petRegister').on('click', petRegister);

  $('.update').on('click', updatePet);

  $('.petInfoTable').on('click', '.delete', deletePet);

  //$('.check-in').on('click', checkinPet);

});

//button to update pet -- updates pets table
//
//button to delete pet -- deletes their visits from visits table and deletes pet from pets table
//
//check-in/check-out button defaults to check in
//check in button click adds date to visits table and changes button on DOM
//check out button click adds date to visits table and changes button on DOM
//
//$('.dropdown').controlgroup();

function ownerRegister(event) {
  event.preventDefault();
  var $ownerButton = $(this);
  var $ownerForm = $ownerButton.closest('#registrationForm');
  var ownerData = $ownerForm.serialize();
  console.log(ownerData);
  $.ajax({
    type: 'POST',
    url: '/owners',
    data: ownerData,
    success: getInfo,
  });
  $(this).find('input').val('');
}

function petRegister(event) {
  event.preventDefault();
  var $petButton = $(this);
  var $petFormInfo = $petButton.closest('#petsForm');
  var petData = $petFormInfo.serialize();
  console.log(petData);
  $.ajax({
    type: 'POST',
    url: '/pets',
    data: petData,
    success: getPetInfo,
  });
  $(this).find('input').val('');
}

function getInfo() {
  $.ajax({
    type: 'GET',
    url: '/owners',
    success: displayInfo,
  });
}

function getPetInfo() {
  $.ajax({
    type: 'GET',
    url: '/pets',
    success: displayPetInfo,
  });
}

function displayInfo(response) {
  console.log(response);
  var $dropdown = $('.dropdownList');
  $dropdown.empty();
  response.forEach(function (owner) {
    var $appendOption = $('<option>' + owner.first_name + ' ' + owner.last_name + '</option>');
    $dropdown.append($appendOption);
    $appendOption.info('id', owner.id);
  });
}

function displayPetInfo(response) {
  console.log(response);

  // TO DO: turn table data that should be editable into inputs

  var $table = $('.petInfoTable');
  $table.empty();
  $table.append('<tr><th>Owner</th><th>Pet</th><th>Breed</th><th>Color</th><th>Update</th><th>Delete</th><th>Check In/Out</th></tr>');
  response.forEach(function (pet) {
    var $deleteButton = $('<button class="delete">Delete</button>');
    $deleteButton.data('id', pet.id);
    var $tr = $('<tr id="petRow"></tr>');
    $tr.append('<td>' + pet.owner_id + '</td>');
    $tr.append('<td>' + pet.name + '</td>');
    $tr.append('<td>' + pet.breed + '</td>');
    $tr.append('<td>' + pet.color + '</td>');

    //TO DO: change update button so it's like the delete button

    $tr.append('<td><button class="update">Update</button></td>');

    var $td = $('<td></td>');
    $td.append($deleteButton);
    $tr.append($td);

    $tr.append('<td><button class="check-in">IN</button></td>');
    $table.append($tr);
  });

}

//function updatePet() {
// TO DO: find the input(type text).val for each element and change on DOM and in database table when updated
//console.log('inside updatePet');

//}

function deletePet(event) {

  console.log('inside deletePet');
  //TO DO: put data directly on the button when appended
  //console.log('Pet id:', pet.id);
  event.preventDefault();
  var petId = $(this).data('id');//we need to add data to something
  console.log('petId variable', petId);
  $.ajax({
    type: 'DELETE',
    url: '/pets/' + petId,
    success: displayPetInfo,
  });
}

//function checkinPet() {

//console.log('inside checkinPet');

//}
