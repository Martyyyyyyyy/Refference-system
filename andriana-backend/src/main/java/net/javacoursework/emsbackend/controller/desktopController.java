package net.javacoursework.emsbackend.controller;
import lombok.AllArgsConstructor;
import net.javacoursework.emsbackend.service.desktopsService;
import net.javacoursework.emsbackend.dto.desktopDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/desktops")
public class desktopController {

    private desktopsService desktopService;

    // Build Add desktopComputer REST API
    @PostMapping
    public ResponseEntity<desktopDto> createDesktop(@RequestBody desktopDto computerDto){
        desktopDto savedDesktop = desktopService.createDesktop(computerDto);
        return new ResponseEntity<>(savedDesktop, HttpStatus.CREATED);
    }

    // Build Get desktopComputer REST API
    @GetMapping("{id}")
    public ResponseEntity<desktopDto> getDesktopById(@PathVariable("id") Long computerId){
        desktopDto computerDto = desktopService.getDesktopById(computerId);
        return ResponseEntity.ok(computerDto);

    }

    // Build Get All desktopComputer REST API
    @GetMapping
    public ResponseEntity<List<desktopDto>> getAllDesktops(){
        List<desktopDto> computers = desktopService.getAllDesktops();
        return ResponseEntity.ok(computers);
    }

    // Build Update desktopComputer REST API

    @PutMapping("{id}")
    public ResponseEntity<desktopDto> updateDesktop(@PathVariable("id") Long computerId,
                                                                  @RequestBody desktopDto updatedDesktop){
        desktopDto desktop = desktopService.updateDesktop(computerId, updatedDesktop);
        return ResponseEntity.ok(desktop);

    }

    // Build Delete desktopComputer REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDesktop(@PathVariable("id") Long computerId){
        desktopService.deleteDesktop(computerId);
        return ResponseEntity.ok("Computer deleted successfully!");
    }

}
